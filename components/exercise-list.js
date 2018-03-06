import { List, ListItem } from 'react-native-elements';

const list = [
  {
    name: 'Run',
  },
  {
    name: 'Lift',
  },
  {
    name: 'Soulcycle',
  },
  {
    name: 'SLT',
  },
  {
    name: 'Tennis',
  },
]

<List containerStyle={{marginBottom: 20}}>
  {
    list.map((l, i) => (
      <ListItem
        key={i}
        title={l.name}
      />
    ))
  }
</List>
