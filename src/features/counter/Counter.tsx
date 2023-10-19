import { countAtom } from '@/atom/counter';
import { useAtom } from 'jotai';
import { FC } from 'react';

const Counter: FC = () => {
  const [count, setCount] = useAtom(countAtom)
  return (
    <div className="w-full max-w-sm border p-4 shadow-md">
      <h1>Counter</h1>
      <p className='text-red-500'>{count}</p>
      <button type="button" className="px-8 py-2 border rounded-full" onClick={() => setCount(count + 1)}>+</button>
      <button type="button" className="px-8 py-2 border rounded-full" onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default Counter