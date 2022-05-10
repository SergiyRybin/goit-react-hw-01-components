// import data from '../path/data';
// export default console.log(data)

// export default function Statistics({ stats }) {
//   console.log(stats);

//   return (
//     <div>
//       {stats.map(st => (
//         <section className="statistics">
//           <h2 className="title">Upload stats</h2>

//           <ul className="stat-list">
//             <li className="item">
//               <span className="label">{st.label}</span>
//               <span className="percentage"> {st.percentage}</span>
//             </li>
//             <li className="item">
//               <span className="label">{st.label}</span>
//               <span className="percentage"> {st.percentage}</span>
//             </li>
//             <li className="item">
//               <span className="label">{st.label}</span>
//               <span className="percentage"> {st.percentage}</span>
//             </li>
//             <li className="item">
//               <span className="label">{st.label}</span>
//               <span className="percentage"> {st.percentage}</span>
//             </li>
//             <li className="item">
//               <span className="label">{st.label}</span>
//               <span className="percentage"> {st.percentage}</span>
//             </li>
//           </ul>
//         </section>
//       ))}
//     </div>
//   );
// }

const Statistics = ({ stats }) => {
  console.log(stats);
  return (
    
    <section className="statistics">
       <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {stats.map(st => (
          <li key={st.id} className="item">
            <span className="label"> {st.label} </span> 
            <span className="percentage"> {st.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Statistics;
