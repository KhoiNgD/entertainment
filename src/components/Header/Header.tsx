import styled from "styled-components";
import { ReactComponent as Logo } from "assets/logo.svg";
import { ReactComponent as HomeNav } from "assets/icon-nav-home.svg";
import { ReactComponent as MoviesNav } from "assets/icon-nav-movies.svg";
import { ReactComponent as TVSeriesNav } from "assets/icon-nav-tv-series.svg";
import { ReactComponent as BookmarkNav } from "assets/icon-nav-bookmark.svg";
import avatarSrc from "assets/image-avatar.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Wrapper>
      <Logo />

      <Navigation>
        <StyledNavLink to="">
          <HomeNav />
        </StyledNavLink>
        <StyledNavLink to="movies">
          <MoviesNav />
        </StyledNavLink>
        <StyledNavLink to="tvseries">
          <TVSeriesNav />
        </StyledNavLink>
        <StyledNavLink to="bookmarked">
          <BookmarkNav />
        </StyledNavLink>
      </Navigation>

      <Profile>
        <img src={avatarSrc} alt="profile avatar" />
      </Profile>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: hsl(var(--semi-dark-blue));
  border-radius: 20px;
  padding: 32px 28px;

  /* TODO: remove gap */
  gap: 75px;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const StyledNavLink = styled(NavLink)`
  &:hover svg path {
    fill: hsl(var(--red));
  }

  &.active svg path {
    fill: hsl(var(--white));
  }
`;

const Profile = styled.div`
  width: 40px;
  border: 1px solid hsl(var(--white));
  border-radius: 50%;
`;

export { Header };
