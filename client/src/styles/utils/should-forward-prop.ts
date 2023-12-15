export function shouldForwardProps(props: string[]) {
  return {
    shouldForwardProp: (prop: string) => !props.includes(prop)
  }
}
