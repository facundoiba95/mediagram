<<<<<<< HEAD
import React, { useContext, useEffect, useState } from 'react'
import { FormChangeLocationContainerStyles } from '../FormChangeLocation/FormChangeLocationStyles'
import SearchBarProfession from '../../../molecules/SearchBars/SearchBarProfession/SearchBarProfession'
import SearchProfessionResult from '../../../molecules/SearchProfessionResult/SearchProfessionResult'
import { useDispatch, useSelector } from 'react-redux'
import { getProfessionByID, getProfessions } from '../../../../redux/slices/professionSlices/professionSlices'
import { GlobalContext } from '../../../../Context/GlobalContext'

const FormChangeProfession = ({ profession }) => {
  const { professions, professionSelected } = useSelector(state => state.professionSlices);
  const placeholder_value = profession ? "Cambiar profesión" : "Buscar profesión";
  const professionCurrent = useSelector(state => state.professionSlices.profession);

  const { inputProfession } = useContext(GlobalContext);
  const [listProfession, setListProfession] = useState([]);
  const dispatch = useDispatch();

  const currentProfession = () => {
    if (profession) {
      return (<b>{profession}</b>)
    } else {
      return (<b>Aun no hay una profesión agregada.</b>)
    }
  }

  const renderChangeProfession = () => (
    <span>
      <b>Tu profesión actual es "{professionCurrent ? professionCurrent.name : ""}"</b>
    </span>
  )

  const handleSearchProfession = () => {
    setListProfession(professions.filter(prof => prof.name.toLowerCase().trim().includes(inputProfession)));
  };

  useEffect(() => {
    if (inputProfession.length) {
      handleSearchProfession()
    } else {
      dispatch(getProfessions())
    }
  }, [inputProfession, professionSelected]);

  useEffect(() => {
    setListProfession(professions)
  }, [professions]);

  useEffect(() => {
    if (profession) {
      dispatch(getProfessionByID(profession))
    };
  }, [professionSelected]);

  return (
    <FormChangeLocationContainerStyles>
      {
        profession
          ? renderChangeProfession()
          : currentProfession()
      }
      <SearchBarProfession placeholder={placeholder_value} />
      <SearchProfessionResult listProfession={listProfession} />
    </FormChangeLocationContainerStyles>
  )
}

=======
import React, { useContext, useEffect, useState } from 'react'
import { FormChangeLocationContainerStyles } from '../FormChangeLocation/FormChangeLocationStyles'
import SearchBarProfession from '../../../molecules/SearchBars/SearchBarProfession/SearchBarProfession'
import SearchProfessionResult from '../../../molecules/SearchProfessionResult/SearchProfessionResult'
import { useDispatch, useSelector } from 'react-redux'
import { getProfessionByID, getProfessions } from '../../../../redux/slices/professionSlices/professionSlices'
import { GlobalContext } from '../../../../Context/GlobalContext'

const FormChangeProfession = ({ profession }) => {
  const { professions, professionSelected } = useSelector(state => state.professionSlices);
  const placeholder_value = profession ? "Cambiar profesión" : "Buscar profesión";
  const professionCurrent = useSelector(state => state.professionSlices.profession);

  const { inputProfession } = useContext(GlobalContext);
  const [listProfession, setListProfession] = useState([]);
  const dispatch = useDispatch();

  const currentProfession = () => {
    if (profession) {
      return (<b>{profession}</b>)
    } else {
      return (<b>Aun no hay una profesión agregada.</b>)
    }
  }

  const renderChangeProfession = () => (
    <span>
      <b>Tu profesión actual es "{professionCurrent ? professionCurrent.name : ""}"</b>
    </span>
  )

  const handleSearchProfession = () => {
    setListProfession(professions.filter(prof => prof.name.toLowerCase().trim().includes(inputProfession)));
  };

  useEffect(() => {
    if (inputProfession.length) {
      handleSearchProfession()
    } else {
      dispatch(getProfessions())
    }
  }, [inputProfession, professionSelected]);

  useEffect(() => {
    setListProfession(professions)
  }, [professions]);

  useEffect(() => {
    if (profession) {
      dispatch(getProfessionByID(profession))
    };
  }, [professionSelected]);

  return (
    <FormChangeLocationContainerStyles>
      {
        profession
          ? renderChangeProfession()
          : currentProfession()
      }
      <SearchBarProfession placeholder={placeholder_value} />
      <SearchProfessionResult listProfession={listProfession} />
    </FormChangeLocationContainerStyles>
  )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default FormChangeProfession