import title from 'title';

export default (text) =>
    title(text, {
        special: [
            'insumos',
            'productos',
            'cumbre',
            'sullana',
            'piura',
            'pasteles',
            'tortas',
            'cremas'
        ]
    });
