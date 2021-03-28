//http://api.tvmaze.com/search/shows?q=girls

const makeImages = (shows) => {
    for (let result of shows){
        if(result.show.image){
            const img = document.createElement('img')
            img.src = result.show.image.medium
            document.body.append(img)
        }
    }
}

const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function(e){
    e.preventDefault()
    //console.log('Submitted')
    const searchTerm = form.elements.query.value;
    //const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)
    //console.log(res.data[0].show.image.medium) //image อยู่ใน medium
    
    const config = {params: {q:searchTerm}, isFunny:'Kan'}
    //whatever in params will add to query string
    const res = await axios.get(`http://api.tvmaze.com/search/shows`,config)
    makeImages(res.data)
    form.elements.query.value = '';

})

