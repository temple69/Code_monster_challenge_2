
import Checked from './Icons/Checked';
const Success = () => {
  return (
    <div>
        <article  className='flex justify-center my-6'>
            <Checked/>
        </article>
      <h2 className="text-[#21092F] font-medium tracking-[0.21388rem] text-2xl text-center my-3">
        THANK YOU!
      </h2>
      <p className="text-[#8F8694] font-medium text-lg my-5 text-center">We’ve added your card details</p>
      <button
        type="submit"
        className="h-[3.125rem] rounded-lg bg-[#21092F] text-[1.125rem] font-medium mt-3 w-[23.8125rem]"
      >
        Continue
      </button>
    </div>
  );
}

export default Success
