import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { WishSelect, WishDeselect } from '../../../redux/actions/wishControlActions'

import WriteWishComponent from './components/WriteWishComponent';
import WritePostComponent from './components/WritePostComponent';

const PostingPage = () => {
  const dispatch = useDispatch();
  const isWish = useSelector(state => state.wishcontrol.isWish);

  const handleWishChange = () => {
    if (isWish) dispatch(WishDeselect());
    else dispatch(WishSelect());
  }

  const [formData, setFormData] = useState(
    {
      title: '',
      contents: '',
      fileUrl: undefined,
    }
  )
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <div>
      게시글 작성 페이지
      <input type="checkbox" value={isWish} onChange={handleWishChange} />
      <span>isWish의 상태 : </span>{String(isWish)}
      <div>
        {
          isWish ?
            <WriteWishComponent
              formData={formData}
              handleInputChange={handleInputChange}
            /> :
            <WritePostComponent
              formData={formData}
              handleInputChange={handleInputChange}
            />
        }
      </div>
    </div>
  )
}

export default PostingPage
