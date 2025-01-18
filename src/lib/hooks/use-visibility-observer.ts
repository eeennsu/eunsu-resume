'use client'

import { RefObject, useEffect, useRef, useState } from 'react'

const defaultObserverOption: IntersectionObserverInit = {
    threshold: 0,
    root: null,
    rootMargin: '0px',
}

export const useVisibilityObserver = <T extends HTMLElement = HTMLDivElement>(
    observerOptions: IntersectionObserverInit = defaultObserverOption
): [boolean, RefObject<T | null>] => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const elementRef = useRef<T>(null)

    useEffect(() => {
        const targetElement = elementRef.current
        if (!targetElement) return

        const observer = new IntersectionObserver(([entry]) => {
            if (entry) {
                setIsVisible(!entry.isIntersecting)
            }
        }, observerOptions)

        observer.observe(targetElement)

        return () => {
            observer.unobserve(targetElement)
        }
    }, [observerOptions])

    return [isVisible, elementRef]
}
