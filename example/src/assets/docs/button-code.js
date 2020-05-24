export const allButtons = (dark) => {
  const darkProp = dark ? ' dark' : '';
  return `<Button${darkProp}>default</Button>
<Button${darkProp} color='var(--primary)'>colored</Button>
<Button${darkProp} color='#ccc' bgColor='var(--primary)'>colored</Button>
<Button${darkProp} disabled>disabled</Button>
<Button${darkProp} rounded>rounded</Button>
<Button${darkProp} depressed>depressed</Button>
<Button${darkProp} outlined>outlined</Button>
<Button${darkProp} text>text</Button>`
}

export const docButtons = (dark, type) => {
  const darkProp = dark ? ' dark' : '';
  const typeProp = type ? ' ' + type : '';
  return `<Button${darkProp}${typeProp}>default</Button>
<Button${darkProp}${typeProp} color='var(--primary)'>colored</Button>
<Button${darkProp}${typeProp} disabled>disabled</Button>`
}

export const blockButton = (dark) => {
  const darkProp = dark ? ' dark' : '';
  return `<Button${darkProp} block>block button</Button>`
}

export const sizeButtons = (dark, type) => {
  const darkProp = dark ? ' dark' : '';
  return `<Button${darkProp} size='small'>small</Button>
<Button${darkProp} size='medium'>medium</Button>
<Button${darkProp} size='large'>large</Button>`
}

export const fabButtons = (dark, type) => {
  const darkProp = dark ? ' dark' : '';
  switch (type) {
    case 'main':
      return `<Fab${darkProp}>
  <span style={{ fontSize: '30px', margin: '2px 0px 0px 2px' }}>&#43;</span>
</Fab>
<Fab${darkProp} color='var(--primary)'>
  <span style={{ fontSize: '24px' }}>&#9733;</span>
</Fab>
<Fab${darkProp} color='#42aaee'>
  &nbsp;<span style={{ fontSize: '24px' }}>&#9729;</span>&nbsp;Extended&nbsp;
</Fab>
<Fab${darkProp} disabled>
  <span style={{ fontSize: '24px' }}>&#9762;</span>
</Fab>`
    case 'size':
      return `<Fab${darkProp} size='small'>S</Fab>
<Fab${darkProp} size='medium'>M</Fab>
<Fab${darkProp} size='large'>L</Fab>`
    default:
      return ''
  }
}
