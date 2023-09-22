import { Badge, ButtonGroup } from "@mui/material";
import React from "react";
import { buttonsGroupData } from "./constants";
import { ButtonGroupWrapper, StyledButton } from "./styled";

const UserControls: React.FC = (): JSX.Element => {
    return (
        <ButtonGroupWrapper>
            <ButtonGroup
                size="large"
                variant="outlined"
                aria-label="text button group"
            >
                {buttonsGroupData.map((item) => {
                    return (
                        <StyledButton key={item.id}>
                            {item.badge.isBadge ? (
                                <Badge badgeContent={item.badge.count} color="primary">
                                    {
                                        <item.icon
                                            sx={{
                                                color: "secondary.contrastText",
                                            }}
                                            fontSize="large"
                                        />
                                    }
                                </Badge>
                            ) :
                                (
                                    <item.icon
                                        sx={{
                                            color: "secondary.contrastText",
                                        }}
                                        fontSize="large"
                                    />
                                )
                            }
                        </StyledButton>
                    );
                })}
                {/* перепилить на отдельный компонент и кнопки тоже, пильнуть для бейджев стейты */}
            </ButtonGroup>
        </ButtonGroupWrapper>
    );
};

export default UserControls;
