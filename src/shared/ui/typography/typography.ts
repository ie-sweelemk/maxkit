import Link from './link';
import Paragraph from './paragraph';
import Text from './text';
import Title from './title';

export type TypographyProps = {
  Text: typeof Text;
  Title: typeof Title;
  Paragraph: typeof Paragraph;
  Link: typeof Link;
}

const Typography = {} as TypographyProps;

Typography.Text = Text;
Typography.Title = Title;
Typography.Paragraph = Paragraph;
Typography.Link = Link;

export default Typography;