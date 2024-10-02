import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
    children: ReactNode;
    className?: string
}

export const Container = ({children, className}:ContainerProps) => {
    return(
        <div className={cn( "bg-primary w-full text-primary-foreground h-screen p-6 md:px-24 py-14 place-content-center", className)}>
            {children}
        </div>
    )
}