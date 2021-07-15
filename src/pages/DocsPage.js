import React from 'react'
import DocsDisplay from '../components/DocsDisplay'
import DocsNavigation from '../components/DocsNavigation'

export default function DocsPage() {


    return (
        <div className="docs-page-container">

            <div className="row docs-page-container-row">
                <DocsNavigation />
                <DocsDisplay />
            </div>
        </div>
    )
}
