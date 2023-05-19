import create from 'zustand'

export const useStore =  create((set)=>({
        //cart
        cart:{
            pizzas:[]
        },

        addPizza:(data)=>
        set((state)=>({
            cart: {
                pizzas:[...state.cart.pizzas, data]
            }
        }))
    })
)


// import create from 'zustand';

// const useStore = create((set) => ({
//   cart: [],
//   addToCart: (item) => set((state) => ({
//     cart: [...state.cart, item],
//   })),
//   removeFromCart: (item) => set((state) => ({
//     cart: state.cart.filter((i) => i !== item),
//   })),
// }));