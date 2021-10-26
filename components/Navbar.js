const liStyle = 'mx-2 cursor-pointer transition hover:text-white';

const Navbar = () => {
  return (
    <div className='my-2 px-1 py-2 bg-gray-700 text-gray-200'>
      <ul className='flex justify-between mr-5'>
        <div>
          <li className='mx-2 font-extrabold text-2xl'>LOGO</li>
        </div>
        <span className='flex justify-between items-center'>
          <li className={liStyle}>HOME</li>
          <li className={liStyle}>INFO</li>
          <li className={liStyle}>ORDER</li>
        </span>
      </ul>
    </div>
  )
}

export default Navbar
