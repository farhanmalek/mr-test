
interface SizeButtonProps {
    size: string
}

const SizeButton = ({size}:SizeButtonProps) => {
  return (
    <div className="h-[50px] w-[50px] flex justify-center items-center">{size}</div>
  )
}

export default SizeButton