import addIcon from "../assets/icons/plus-icon.png"

interface Items {   
    id: number;
    image: string; 
    itemName: string;
    price: string;
}

interface ItemsMenu {
    menu: Items[];
}

const MenuCard: React.FC<ItemsMenu> = ({menu}) => {

    return(
        <>
            {menu.map((e) => (
                <div key={e.id} className="flex flex-col h-fit w-fit p-[10px] gap-2 rounded-lg bg-[#FFDE59]">
                    <div className="w-[170px]" />
                    <img src={`${e.image}`} className="h-[140px] w-full" />
                    <p className="font-medium text-[17px] mb-[5px]">{e.itemName}</p>
                    <div className="flex justify-between w-full h-[30px]">
                        <p className="font-bold text-[15px]">{e.price}</p>
                        <button className="cursor-pointer">
                            <img src={addIcon} className="h-7 w-7 hover:h-8 hover:w-8 transition-all ease-in-out" />
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default MenuCard;
