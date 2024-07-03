import {DrawerToggle, Icon, Scroller, SideNav, SideNavElement, SideNavItem} from "@vaadin/react-components";
import { AppLayout } from "@vaadin/react-components";
import {ReactNode, useEffect, useRef} from "react";
import "../styles/styles.css";
import {Outlet, useMatches} from "react-router-dom";

// type Props = {
//     children: ReactNode
// }

const h1Style = {
    fontSize: 'var(--lumo-font-size-l)',
    margin: 0,
};

const PainelLayout  = (
    // {children}: Props
) => {
    const sideNavRef = useRef<SideNavElement>(null);
    const matches = useMatches();
    const currentHandle = matches[matches.length - 1]?.handle as any;
    const pageTitle = currentHandle?.title ?? 'My App';


    useEffect(() => {
        if (sideNavRef.current) {
            // Example-specific workaround
           // patchSideNavNavigation(sideNavRef.current);
        }
    }, [sideNavRef.current]);

    return (
        <AppLayout>
            <DrawerToggle slot="navbar" />
            <h1 slot="navbar" style={h1Style} >
                {pageTitle}
            </h1>
            <Scroller slot="drawer" className="p-s">
                <SideNav ref={sideNavRef}>
                    <SideNavItem path="/users">
                        <Icon icon="vaadin:user" slot="prefix" />
                        Usuarios
                    </SideNavItem>
                    <SideNavItem path="/roles">
                        <Icon icon="vaadin:shield" slot="prefix" />
                        Permissões
                    </SideNavItem>
                </SideNav>
            </Scroller>
            <div className={"flex flex-col p-l"}>
                <Outlet />
            </div>
        </AppLayout>
    )
}

export default PainelLayout;