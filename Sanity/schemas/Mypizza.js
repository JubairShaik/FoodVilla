export default {
     name:'mypizza',
     title:'mypizza',
     type:'document',
     fields:[
        {
            name:'image',
            titel:'image',
            type:'image',
            options:{
                hotspot:true,
            }
        },

        {
            name:'name',
            title:'name',
            type:'string'
        },

        {
            name:'slug',
            title:'slug',
            type:'slug',
            options:{
                source:'name',
                maxLenght:90
            },
        },

        {
            name:'price',
            title:'price',
            type:'array',
            of:[{type:'number'}]
        },

        {
            name:'details',
            title:'details',
            type:'string'
        }


     ]
}