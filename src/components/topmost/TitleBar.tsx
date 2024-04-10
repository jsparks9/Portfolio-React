import DateComponent from './DateComponent'

const TitleBar = () => {
  return(
  <>
    <div className="head">
      <div className="headerobjectswrapper">
        <header>The Tech Times</header>
      </div>
      <div className="subhead">
        San Antonio, TX - <DateComponent /> - Seven Pages
      </div>
    </div>
  </>)
}

export default TitleBar;
