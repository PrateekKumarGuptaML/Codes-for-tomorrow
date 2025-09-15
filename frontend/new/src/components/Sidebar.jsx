import './Sidebar.css';
const Sidebar = () => {
  return(
    <>
      <div className="sidebar_container">
        <div className='profile section'>
          <figure>
            <img src="https://png.pngtree.com/png-vector/20221203/ourmid/pngtree-cartoon-style-female-user-profile-icon-vector-illustraton-png-image_6489286.png" alt=" profile image" height={50} />
          </figure>

          <section>
            <h3>Hi Reader,</h3>
            <p>Here is your news!</p>
          </section>
        </div>

        <section className='toggle section'>
          <h2>View Toggle</h2>
          <div className='buttons'>
            <button className='first_btn'>▤</button>
            <button className='second_btn'>☰</button>
          </div>
        </section>

        <section className='feedback section'>
          <h2>Have a Feedback?</h2>
          <button >We're listening!</button>
        </section>
      </div>
    </>
  )
}

export default Sidebar;