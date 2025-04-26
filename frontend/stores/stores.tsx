import {create} from 'zustand'

const store = (set:any)=>({
    showSubDivWhenProfileClicked: false,

    setshowSubDivWhenProfileClicked:()=>set((state:any)=>({showSubDivWhenProfileClicked:!state.showSubDivWhenProfileClicked}))
})

const useStore = create(store);

export default useStore;