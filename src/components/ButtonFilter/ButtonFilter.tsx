import './ButtonFilter.scss'

interface ButtonFilterProps {
  width: string;
  content: React.ReactNode;
}

const ButtonFilter: React.FC<ButtonFilterProps> = ({ width, content }) => {

  return (
  <button style={{width: width}}>
    {content}
  </button>
  )
}

export default ButtonFilter
