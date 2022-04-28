interface basePush{
  type: 'note' | 'link'
  title: string,
  body: string,
}

interface NotePush extends basePush{
  type: 'note',
}

interface LinkPush extends basePush{
  type: 'link',
  url: string,
}

export type PushType = NotePush | LinkPush;
