function customRender(reactElement,mainContainer){
    const domelement =  document.createElement
    (reactElement.type)
    m 
    domelement.innerHTML = reactElement.children 

    domelement.setAttribute("href", reactElement.props.traget)

    domelement.setAttribute("target",reactElement.props.traget)

    mainContainer.appendChild(domelement)
}
const reactElement = {
    type: 'a',
    props:{
        herf: "https://www.google.com/",
        traget: "_blank"
    },
    children: 'click me to vist google'
}

const mainContainer = document.querySelector("#root")

customRender(reactElement, mainContainer)