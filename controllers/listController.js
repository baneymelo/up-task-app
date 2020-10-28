exports.home = (req,res) => {
    res.render('index', { namePage : 'Listas' });

}
exports.listForm = (req, res) => {
    res.render('newList', { namePage: 'Nueva Lista' })
}
exports.newList = (req, res) => {
    /* console.log(req.body); */
    const { name } = req.body;

    let errors = [];

    if (!name) {
        errors.push({'texto': 'Agrega un nombre a la lista'});
    }
    //si hay errores
    if (errors.length > 0) {
        res.render('newList', { namePage : 'Nueva Lista', errors});
        
    }else {

    }
}