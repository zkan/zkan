// Credit: https://github.com/thmsgbrt/thmsgbrt

const Mustache = require('mustache')
const fetch = require('node-fetch')
const convert = require('xml-js')
const fs = require('fs')

const MUSTACHE_MAIN_DIR = './main.mustache'
const HASHNODE_RSS_FEED_URL = 'https://zkan.hashnode.dev/rss.xml'

let DATA = {
  refresh_date: new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    timeZone: 'Asia/Bangkok',
  }),
}

async function setHashnodeLatestPosts() {
  await fetch(HASHNODE_RSS_FEED_URL)
    .then(r => r.text())
    .then(r => {
      let data = JSON.parse(convert.xml2json(r))

      let post_1 = data.elements[0].elements[0].elements[8]
      let post_2 = data.elements[0].elements[0].elements[9]
      let post_3 = data.elements[0].elements[0].elements[10]

      DATA.post_title_1 = post_1.elements[0].elements[0].cdata
      DATA.post_link_1 = post_1.elements[2].elements[0].text
      DATA.post_title_2 = post_2.elements[0].elements[0].cdata
      DATA.post_link_2 = post_2.elements[2].elements[0].text
      DATA.post_title_3 = post_3.elements[0].elements[0].cdata
      DATA.post_link_3 = post_3.elements[2].elements[0].text
    })
}

async function generateReadMe() {
  await fs.readFile(MUSTACHE_MAIN_DIR, (err, data) =>  {
    if (err) throw err
    const output = Mustache.render(data.toString(), DATA)
    fs.writeFileSync('README.md', output)
  })
}

async function action() {
  await setHashnodeLatestPosts()
  await generateReadMe()
}

action()