import { BadgeContainer } from "./styles";

interface ProductBadgeProps {
  description: string;
}

export function ProductBadge({ description }: ProductBadgeProps) {
  return (
    <BadgeContainer>{description}</BadgeContainer>
  )
}
