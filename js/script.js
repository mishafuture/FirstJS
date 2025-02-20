'use strict';

window.addEventListener('DOMContentLoaded', () => {
   const body = document.querySelector('body');
   const textNode = [];

   function recursionNode(element) {
        element.childNodes.forEach(node => {
            if (node.nodeName.match(/^H\d/)) {
                const obj = {
                    header: node.nodeName,
                    content: node.textContent.trim(),
                }
                textNode.push(obj);
            } else {
                recursionNode(node);
            }
        });
   }

   recursionNode(body);

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(textNode),
    })
        .then(res => res.json())
        .then(data => {console.log(data)});
});