import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

import utilStyles from '../styles/utils.module.scss'
import styles from '../styles/Project.module.scss'

const projectsDir = path.join(process.cwd(), 'projects')

export function getSortedProjectsData() {
    // Get the file names under /projects
    const fileNames = fs.readdirSync(projectsDir)
    const allProjectsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '')

        // Read md file 
        const fullPath = path.join(projectsDir, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf-8');

        // Parse the metatdata section
        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data,
        };
    })

    return allProjectsData.sort((a, b) => {
        if (a.end_date < b.end_date) {
            return 1;
        }
        else {
            return -1;
        }
    })
}

export function getAllProjectIds() {
    const fileNames = fs.readdirSync(projectsDir);

    // It must be of the form
    // [
    //   {
    //     params: {
    //       id: 'checkbox-detection'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'document-layout-analysis'
    //     }
    //   }
    // ]
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

function parseProjectData(rawContent) {
    let parsed = rawContent.replaceAll('h1', `h1 class="${utilStyles.headingXl} mb-4 mt-4"`)
                           .replaceAll('<ul', `<ul class="${utilStyles.list} mb-2 mt-2"`)
                           .replaceAll('<li', `<li class="${utilStyles.tag} mb-2"`)
                           .replaceAll('<ol', `<ol class=${styles.imageList}`)
                           .replaceAll('<a', '<a target="_blank"')
    return parsed
}

export async function getProjectData(id) {
    const fullPath = path.join(projectsDir, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    // Parse the content section
    const matterResult = matter(fileContents);

    // Convert markdown into HTML string
    const processedContent = await remark().use(html).process(matterResult.content);
    processedContent.value = parseProjectData(processedContent.value)
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...matterResult.data 
    }
}