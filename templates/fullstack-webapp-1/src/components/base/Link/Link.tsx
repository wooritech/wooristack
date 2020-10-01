import NextLink from 'next/link';

interface LinkProps {
  href: string;
  className?: string;
}

/**
 * 링크 컴포넌트
 *
 * - href속성에 따라 외부 또는 클라이언트 사이드 라우팅 수행
 */
const Link: React.FC<LinkProps> = (props) => {
  const { href, className, children } = props;

  const isExternal =
    href.startsWith('http:') ||
    href.startsWith('https:') ||
    href.startsWith('mailto:');

  if (isExternal) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  // 클라이언트 사이드 라우팅
  return (
    <NextLink href={href}>
      {/* eslint-disable-next-line  jsx-a11y/anchor-is-valid */}
      <a className={className}>{children}</a>
    </NextLink>
  );
};

export default Link;
