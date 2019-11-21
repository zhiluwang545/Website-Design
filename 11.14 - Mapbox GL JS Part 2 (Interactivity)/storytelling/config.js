var config = {
    style: 'mapbox://styles/lesley545545/ck2co6ixo0o1a1cs3kzo31cts',
    accessToken: 'pk.eyJ1IjoibGVzbGV5NTQ1NTQ1IiwiYSI6ImNrMDg3YW5ibjRlbWkzbW12NGxuNHdrZm4ifQ.-foBRQgkzeSoaM0nyCrqXA',
    showMarkers: true,
    theme: 'light',
    alignment: 'right',
    title: 'Travel and Feed',
    subtitle: 'Save your leftovers and help homeless animals',
    byline: 'By Zhilu',
    footer: 'Source: City of Chengdu.',
    chapters: [
        {
            id: 'chapter-1',
            title: 'Our Goals',
            image: './images/image_6934e-Dog-Personalities.jpg',
            description: 'Help homeless dogs',
            location: {
                center: [-74.51341, 40.03121],
                zoom: 11.88,
                pitch: 45.00,
                bearing: -40.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter-2',
            title: 'History',
            image: './images/5b02e45f5e48ec47008b4590-750-563.jpg',
            description: 'They were found by a travelor',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter-3',
            title: 'History',
            image: './images/5b02e45f5e48ec47008b4590-750-563.jpg',
            description: 'They were found by a travelor',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }
    ]
};
