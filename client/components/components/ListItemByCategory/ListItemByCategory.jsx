import {
  StyledListItem,
  StyledListItemFooter,
  StyledListItemHeader,
  StyledListItemImage,
  StyledListItemProfile,
  StyledListItemProfileWrapper,
  StyledListItemWrapper,
} from "./ListItemByCategory.style";

import { H6 } from "../H6/H6.style";
import { SmallText } from "../SmallText/SmallText.style";
import Link from "next/link";

const ListItemByCategory = ({ titrecours, image }) => {
  return (
    <Link href={`/classes/${titrecours}`}>
      <StyledListItem>
        <StyledListItemWrapper>
          <StyledListItemImage
            src={image}
            alt={image}
          />
          <StyledListItemHeader>
            <StyledListItemProfileWrapper>
              <StyledListItemProfile
                src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgn&dpr=2&w=500"
                alt="Profile"
              />
            </StyledListItemProfileWrapper>
            <H6>{titrecours}</H6>
          </StyledListItemHeader>
          <StyledListItemFooter>
            <SmallText>Dorinel Okondzo</SmallText>
          </StyledListItemFooter>
        </StyledListItemWrapper>
      </StyledListItem>
    </Link>
  );
};

export default ListItemByCategory;
