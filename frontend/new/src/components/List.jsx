import './List.css';

const List = () => {
  return (
    <>
      <div className="list_container">
        <div className="card">
          <figure>
            <img
              src="https://png.pngtree.com/png-vector/20221203/ourmid/pngtree-cartoon-style-female-user-profile-icon-vector-illustraton-png-image_6489286.png"
              alt=" profile image"
              height={50}
            />
          </figure>

          <section>
            <h2>
              Lorem Ipsum is simply dummy text of the printing and typesetting
        
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className='date'>
              Mon, 21 Dec 2020 14:57 GMT
            </p>
          </section>
        </div>

        <div>
          <button>❌</button>
        </div>
      </div>
    </>
  );
};

export default List;
