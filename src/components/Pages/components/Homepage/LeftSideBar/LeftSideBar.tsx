import { Menu } from 'antd';
import { useStore } from '../../../../../Store/store';
import { selectCategory } from '../../../../../Store/Action';


const LeftSideBar = (): JSX.Element => {
  const { state, dispatch} = useStore()

  const onOpenChange = (keys: any):void => {
    dispatch(selectCategory(keys.key))
  };

  return (
    <Menu
    className="middleBar pt-main"
    mode="inline" 
    onClick={onOpenChange}
    >
      {state.products.category.map((item: { name: string, count: number} )=> (
         <Menu.Item key={item.name}  >
          { item.name } { " "} ({item.count})
        </Menu.Item>
 
      ))}
      </Menu>
  );
};

export default LeftSideBar