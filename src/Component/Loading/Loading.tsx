import './Loading.Module.css'
export default function Loading() {
  return (
    <div className="flex justify-center items-center bg-gray-900 h-screen">
      <div className="loader-wrapper ">
  <span className="loader-letter">L</span>
  <span className="loader-letter">O</span>
  <span className="loader-letter">A</span>
  <span className="loader-letter">D</span>
  <span className="loader-letter">I</span>
  <span className="loader-letter">N</span>
  <span className="loader-letter">G</span>

  <div className="loader"></div>
</div>
    </div>
  )
}
