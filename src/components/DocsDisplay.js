import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
export default function DocsDisplay() {
    return (
        <div class="nine columns docs-page-container-row">
            <h1>Introduction</h1>
            <p>
                This page holds the information you need to get familiar with the resources of the <strong>Law and Order SVU API.</strong>
            </p>

            <h1>REST</h1>
            <p>
                There are three available resources
            </p>

            <SyntaxHighlighter language='json' style={ docco }>
                {"[\n  {\n     \"detectives\": \"https://law-and-order-api.herokuapp.com/detectives\"\,\n     \"perps\"\: \"https://law-and-order-api.herokuapp.com/perps\",  \n     \"episodes\":\"https://law-and-order-api.herokuapp.com/episodes\"  \n  }\n]"}
            </SyntaxHighlighter>

            <h1>Get all the detectives</h1>
            
            <SyntaxHighlighter language="json" style={ docco }>
                {"[\n  {\n     \"id\": 3\,\n     \"name\": \"Det. Elliot Stabler\"\,\n     \"actor\": \"Christopher Meloni\"\,\n     \"image\": \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHHEJZFm_0QqyjZvrJhKqh-8_DZOcOVrL8g&usqp=CAU\"\,\n  }\,\n \/\/  etc...  \n]"}
            </SyntaxHighlighter>

            <h1>Get all of the perps</h1>
            <SyntaxHighlighter language="json" style={ docco }>
                {"[\n  {\n     \"id\": 4\,\n     \"name\": \"Merrit Rook\"\,\n     \"actor\": \"Robin Williams\"\,\n     \"crime\": \"Crafty sound engineer\"\,\n     \"image\": \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-AQHD-qjoU6yUPEj2BprsoKvH_OkpEoQxQ&usqp=CAU\"\,\n     \"season\": {\n          \"id\": 3\,\n          \"number\" : 9\n     }\,\n     \"episode\": {\n          \"title\": \"Authority\"\,\n          \"episode_number\": 17\n     }\n  }\,\n \/\/  etc...  \n]"}
            </SyntaxHighlighter>

            <h1>Get all of the episodes</h1>
            <SyntaxHighlighter language="json" style={ docco }>
                {"[\n  {\n     \"id\": 5\,\n     \"title\": \"Authority\"\,\n     \"episode_number\": 17\,\n     \"season\":{\n          \"id\": 3\,\n          \"number\": 9\n     }\,\n     \"perp\": {\n          \"id\": 4\,\n          \"name\": \"Merrit Rook\",\n          \"actor\": \"Robin Williams\"\,\n          \"crime\": \"Crafty sound engineer\"\,\n          \"image\": \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-AQHD-qjoU6yUPEj2BprsoKvH_OkpEoQxQ&usqp=CAU\"\n     }\n  }\,\n \/\/ etc...\n]"}
            </SyntaxHighlighter>
    
        </div>
    );
}
