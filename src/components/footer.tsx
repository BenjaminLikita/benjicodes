

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="grid place-items-center bg-black-1 py-3 text-sm text-white">
        <span>&copy; {year} Likita Benjamin - All rights reserved</span>
    </footer>
  )
}

export default Footer