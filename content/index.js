// index.js
const fs = require('fs')
const parseMarkdown = require('front-matter-markdown')
 
/**
 * getFiles - Get list of files in directory
 * @param {string} dir
 * @returns {Array} Array of objects
 */
const getFiles = dir => {
  const files = fs.readdirSync(dir)
  let filelist = []
 
  files.forEach(file => {
    const markdownFile = fs.readFileSync(`content/blog/${file}`, 'utf-8')
    const fileContents = parseMarkdown(markdownFile)
    const date = fileContents.date
    const slug = file
      .split('.')
      .slice(0, -1)
      .join('.')
 
    const obj = { date, slug }
 
    filelist.push(obj)
  })
  return filelist
}
 