import {useSelector} from 'react-redux';
import {StoreState} from './store';

export default function LeftPane() {
    const {title, tags, image, subtitle} = useSelector((state: StoreState) => state.productInfo);
    return (
      <div className='left-pane'>
        <img className='product-image' src={image} />
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <div className='tags'>{tags.map((tag: string) => <div key={tag} className="tag">{tag}</div>)}</div>
      </div>);
  }