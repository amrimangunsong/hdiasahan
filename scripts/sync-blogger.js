import fs from 'fs'
import path from 'path'

const indexPath = path.resolve(process.cwd(), 'index.html')
const templatePath = path.resolve(process.cwd(), 'blogger-template.xml')

try {
  const indexContent = fs.readFileSync(indexPath, 'utf8')

  // Ekstrak tag <head>...</head> dari index.html
  const headMatch = indexContent.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)
  if (!headMatch) {
    console.error('❌ Gagal menemukan tag <head> di index.html')
    process.exit(1)
  }

  let indexHeadInner = headMatch[1]

  // Hapus tag vite dev scripts jika ada
  indexHeadInner = indexHeadInner.replace(/<script type="module" src="\/src\/main\.tsx"><\/script>/g, '')

  // Escape ampersand (&) agar valid untuk XML/SAX parser Blogger (kecuali yang sudah &amp; atau entitas valid lainnya)
  // Regex mencari & yang tidak diikuti oleh #?[\w\d]+;
  let xmlSafeHead = indexHeadInner.replace(/&(?!(#[0-9]+|[a-zA-Z0-9]+);)/g, '&amp;')

  // JSDelivr link untuk CSS dan JS
  const cssCdn = "<link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/amrimangunsong/hdiasahan@main/dist/assets/index.css'/>"
  const jsCdn = "<script type='module' src='https://cdn.jsdelivr.net/gh/amrimangunsong/hdiasahan@main/dist/assets/index.js'></script>"

  // Susun bagian head untuk blogger-template.xml
  let newHeadContent = xmlSafeHead.trim() + '\n  \n  <!-- Asset CSS dari GitHub via JSDelivr -->\n  ' + cssCdn + '\n  \n  <b:skin><![CDATA[\n    body { margin: 0; padding: 0; }\n    #navbar-iframe { display: none !important; }\n  ]]></b:skin>'

  // Susun ulang blogger-template.xml lengkap dengan struktur XML Blogger
  const newTemplate = `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultwidgetversion='2' b:layoutsversion='3' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/gastats' xmlns:data='http://www.google.com/schema/ga'>
<head>
  <meta charset='UTF-8'/>
  <meta content='width=device-width, initial-scale=1' name='viewport'/>
  <title><data:blog.title/></title>

${newHeadContent}
</head>
<body>
  <!-- Root React App -->
  <div id='root'></div>

  <!-- Section wajib Blogger (disembunyikan) -->
  <div style='display:none'>
    <b:section id='main' showaddelement='no'>
      <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog' visible='false'>
        <b:includable id='main'></b:includable>
      </b:widget>
    </b:section>
  </div>

  <!-- Asset JS dari GitHub via JSDelivr -->
  ${jsCdn}
</body>
</html>`

  fs.writeFileSync(templatePath, newTemplate, 'utf8')
  console.log('✅ Berhasil menyinkronkan & meng-escape XML blogger-template.xml secara otomatis!')
} catch (err) {
  console.error('❌ Error saat sinkronisasi blogger template:', err)
  process.exit(1)
}
