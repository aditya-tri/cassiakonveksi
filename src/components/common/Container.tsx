/**  
 * Container.tsx  
 * A responsive max-width container to center content and provide horizontal padding.  
 */  
import React from 'react'  
import clsx from 'clsx'  
  
/** Props for Container component */  
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {  
  /** Optional max width size key */  
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'  
}  
  
/**  
 * Container  
 * Wraps children with a centered max-width and responsive paddings.  
 */  
export function Container({ className, size = 'xl', ...props }: ContainerProps) {  
  const sizes: Record<NonNullable<typeof size>, string> = {  
    sm: 'max-w-2xl',  
    md: 'max-w-3xl',  
    lg: 'max-w-5xl',  
    xl: 'max-w-7xl',  
    '2xl': 'max-w-[90rem]',  
  }  
  return (  
    <div  
      className={clsx(  
        'mx-auto w-full px-6 md:px-8',  
        sizes[size],  
        className  
      )}  
      {...props}  
    />  
  )  
}  
  
export default Container