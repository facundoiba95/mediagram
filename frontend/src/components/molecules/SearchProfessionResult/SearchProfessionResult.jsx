import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MoonLoaderResponsive from '../Loaders/MoonLoaderResponsive/MoonLoaderResponsive';
import { ResultLocationContainerStyles } from '../../organisms/Forms/FormCreateContent/FormCreateContentStyles';
import { ResultLocationItemStyles } from '../../organisms/Forms/FormChangeLocation/FormChangeLocationStyles';
import { BiSolidBriefcase } from "react-icons/bi";
import { GlobalContext } from '../../../Context/GlobalContext';
import { resetStateProfession, setProfessionSelected } from '../../../redux/slices/professionSlices/professionSlices';
import { updateProfession } from '../../../redux/slices/userSlices/userSlices';
import { refreshUserAuth } from '../../../redux/slices/authSlices/authSlices';

const SearchProfessionResult = ({ listProfession }) => {
  const errorProfession = useSelector(state => state.professionSlices.error);
  const isLoadingProfession = useSelector(state => state.professionSlices.isLoading);
  const { setInputProfession } = useContext(GlobalContext);
  const dispatch = useDispatch();

  const selectProfession = async (profession) => {
    await dispatch(setProfessionSelected(profession._id))
    await setInputProfession(profession.name);
    await dispatch(updateProfession(profession._id))
    await dispatch(refreshUserAuth());
    dispatch(resetStateProfession())
  }

  const renderProfessions = () => {
    if (errorProfession == null) {
      return listProfession.map(item => (
        <ResultLocationItemStyles onClick={() => selectProfession(item)}>
          <BiSolidBriefcase className='iconLocation' />
          <p>{item.name}</p>
        </ResultLocationItemStyles>
      ))
    } else {
      return (
        <ResultLocationItemStyles>
          <BiSolidBriefcase className='iconLocation' />{errorProfession}
        </ResultLocationItemStyles>
      )
    }
  }

  return (
    <ResultLocationContainerStyles isLocation={listProfession.length}>
      {
        isLoadingProfession
          ? <MoonLoaderResponsive size={30} />
          : renderProfessions()
      }
    </ResultLocationContainerStyles>
  )
}

export default SearchProfessionResult