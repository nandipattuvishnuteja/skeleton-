import { Stack, Skeleton } from "@mui/material";
import "./styles.css";

export const MuiSkeleton = () => {
  return (
    <div className="header">
      <Stack spacing={1} width="250px">
        <div className="blog">
          <Skeleton
            variant="text"
            animation={false}
            height="32px"
            width="61px"
          />
        </div>
        <Skeleton
          variant="text"
          animation={false}
          height="20px"
          width="266px"
        />
        <Skeleton
          variant="text"
          animation={false}
          height="40px"
          width="300px"
        />
        <div>
          <span>
            <Skeleton
              variant="rectangular"
              animation={false}
              height="240px"
              width="253px"
            />
          </span>
          <br />
          <span>
            <Skeleton
              variant="rectangular"
              animation={false}
              height="240px"
              width="253px"
            />
          </span>
        </div>
      </Stack>
    </div>
  );
};
