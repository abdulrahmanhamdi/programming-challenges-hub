/* ============================
    MARKDOWN + CODE RENDERER
============================ */

function renderMarkdownInto(elementId, markdownText) {
    const html = marked.parse(markdownText);
    $(elementId).innerHTML = html;

    // Highlight blocks
    document.querySelectorAll(`#${elementId} pre code`).forEach(el => {
        hljs.highlightElement(el);
    });

    // Add copy button
    document.querySelectorAll(`#${elementId} pre`).forEach(pre => {
        const btn = document.createElement("button");
        btn.className = "copy-btn";
        btn.innerText = "Copy";

        btn.onclick = () => {
            navigator.clipboard.writeText(pre.innerText);
            btn.innerText = "Copied!";
            setTimeout(() => btn.innerText = "Copy", 1200);
        };

        pre.appendChild(btn);
    });
}
