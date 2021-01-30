import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface LinkProps extends ChakraLinkProps {
  href: string;
  _active?: ChakraLinkProps;
}

const Link: React.FC<LinkProps> = ({ href, children, _active, ...props }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  const inactiveProps = {
    color: "blue.500",
    _hover: { textDecoration: "underline" },
    ...props,
  };
  const activeProps = {
    color: "blue.700",
    _hover: { textDecoration: "underline" },
    ..._active,
  };

  const linkProps = isActive ? activeProps : inactiveProps;

  return (
    <NextLink passHref href={href}>
      <ChakraLink {...linkProps}>{children}</ChakraLink>
    </NextLink>
  );
};

export default Link;
