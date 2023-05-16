import './input.scss'

interface InputProps {
  className?: string;
  value: string
  type: string
  placeholder: string
  onChange(event: React.ChangeEvent<HTMLInputElement>): void
}

const Input: React.FC<InputProps> = ({
  value,
  type,
  placeholder,
  onChange,
  className,
}) => {
  return (
    <input
      className={className}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default Input
