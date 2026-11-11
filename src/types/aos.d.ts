declare module "aos" {
  interface AosOptions {
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    offset?: number;
    delay?: number;
    startEvent?: string;
    useClassNames?: boolean;
    disableMutationObserver?: boolean;
    disable?: boolean;
    initClassName?: string;
    animatedClassName?: string;
    debounceDelay?: number;
    throttleDelay?: number;
  }

  interface Aos {
    init(options?: AosOptions): void;
    refresh(): void;
    refreshHard(): void;
  }

  const AOS: Aos;
  export default AOS;
}
