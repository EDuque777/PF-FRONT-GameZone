// import * as act from "../../redux/actions";
// import { useDispatch, useSelector } from "react-redux";
// import React, { useEffect, useState } from "react";

// const Filters = () => {

//     const dispatch = useDispatch();

//     const allPaltformDb = useSelector(state => state.platformAllDb)
//     console.log(allPaltformDb)

//     useEffect(() => {
//         dispatch(act.filterGamesDb())
//         dispatch(act.platformAll())
//     }, [dispatch])

//     const handleFilteredDb = (event) => {
//         dispatch(act.filterGamesDb(event.target.value))
//     };

//     const platformDb = allPaltformDb.filter(game => game.platform)//.flat();
//     console.log(platformDb)

//     return(

//         <>

//             <select onChange={handleFilteredDb}>
//             <option hidden>Filter</option>
//             <option disabled>Filter</option>
//              {platformDb.map(({platform, id}) => (
//               <option key={id} value={platform}>{platform}</option>
//             ))}
//             </select>

//         </>
//     )
// }

// export default Filters


import * as act from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

const Filters = () => {
  const dispatch = useDispatch();

  const allPaltformDb = useSelector((state) => state.platformAllDb);
  console.log(allPaltformDb);

  useEffect(() => {
    dispatch(act.filterGamesDb());
    dispatch(act.platformAll());
  }, [dispatch]);

  const handleFilteredDb = (event) => {
    dispatch(act.filterGamesDb(event.target.value));
  };

  const platformDb = allPaltformDb.filter((game) => game.platform);

  return (
    <>
      <select onChange={handleFilteredDb}>
        <option hidden>Filter</option>
        <option value="platforms">Plataformas</option>
        {platformDb.map(({ platform, id }) => (
          <option key={id} value={platform}>
            {platform}
          </option>
        ))}
      </select>
    </>
  );
};

export default Filters;